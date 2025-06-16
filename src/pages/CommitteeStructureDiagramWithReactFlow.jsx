import React, { useCallback, useMemo } from 'react';
// ודא שאתה מייבא את useNodesState, useEdgesState, addEdge
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { Box, Typography, Card, CardContent, useTheme, useMediaQuery } from '@mui/material';

// רכיבי צומת מותאמים אישית
const CustomNode = ({ data, isConnectable }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // התאמה למסכים קטנים יותר עבור גודל פונט

  let backgroundColor = theme.palette.primary.main;
  let textColor = 'white';
  let variant = isSmallScreen ? "h6" : "h5"; // גודל כותרת הצומת
  let contentVariant = isSmallScreen ? "caption" : "body2"; // גודל תוכן הצומת

  if (data.type === 'subCommittee') {
    backgroundColor = theme.palette.info.light;
    textColor = theme.palette.info.contrastText;
    variant = isSmallScreen ? "subtitle1" : "h6";
  } else if (data.type === 'topic') {
    backgroundColor = theme.palette.background.paper;
    textColor = theme.palette.text.primary;
    variant = isSmallScreen ? "caption" : "subtitle2";
    contentVariant = isSmallScreen ? "caption" : "body2";
  }

  return (
    <Card
      sx={{
        width: 'auto', // רוחב אוטומטי בהתאם לתוכן
        minWidth: data.type === 'mainCommittee' ? (isSmallScreen ? 180 : 250) : (isSmallScreen ? 120 : 180),
        maxWidth: data.type === 'mainCommittee' ? (isSmallScreen ? 250 : 350) : (isSmallScreen ? 200 : 300),
        p: data.type === 'topic' ? 0.5 : 1, // ריווח פנימי קטן יותר לנושאים
        backgroundColor: backgroundColor,
        color: textColor,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}> {/* הסרת ריווחים פנימיים מיותרים */}
        <Typography variant={variant} component="div" sx={{ mb: data.type === 'topic' ? 0 : 0.5 }}>
          {data.label}
        </Typography>
        {data.content && (
          <Typography variant={contentVariant} component="div">
            {data.content}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

// Map of custom node types
const nodeTypes = {
  customNode: CustomNode,
};

const CommitteeStructureDiagramWithReactFlow = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // for overall layout adjustments

  // Process data for React Flow
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    const reactFlowNodes = [];
    const reactFlowEdges = [];
    let yOffset = 50; // Initial Y position for the main committee
    let xOffset = 0; // Initial X position for sub-committees

    const mainCommitteeName = Object.keys(data.committee_structure)[0];
    const subCommittees = data.committee_structure[mainCommitteeName];

    // 1. Main Committee Node
    const mainNodeId = 'main-committee';
    reactFlowNodes.push({
      id: mainNodeId,
      type: 'customNode', // Using our custom node type
      position: { x: 0, y: yOffset },
      data: { label: mainCommitteeName, type: 'mainCommittee' },
      sourcePosition: 'bottom', // Define where edges can start
      targetPosition: 'top',   // Define where edges can end
    });
    yOffset += 150; // Space for the next level

    // Adjust X offset for sub-committees based on screen size
    const subCommitteeNodeWidth = isSmallScreen ? 150 : 200; // Estimated width
    const gap = isSmallScreen ? 20 : 50; // Gap between sub-committees
    const totalSubCommitteeWidth = Object.keys(subCommittees).length * subCommitteeNodeWidth + (Object.keys(subCommittees).length - 1) * gap;
    xOffset = -totalSubCommitteeWidth / 2 + subCommitteeNodeWidth / 2;


    // 2. Sub-Committees Nodes and Edges from Main
    Object.entries(subCommittees).forEach(([subCommitteeName, topics], subIndex) => {
      const subNodeId = `sub-${subCommitteeName.replace(/\s/g, '-')}`;
      const subNodeX = xOffset + subIndex * (subCommitteeNodeWidth + gap);

      reactFlowNodes.push({
        id: subNodeId,
        type: 'customNode', // Using our custom node type
        position: { x: subNodeX, y: yOffset },
        data: { label: subCommitteeName, type: 'subCommittee' },
        sourcePosition: 'bottom',
        targetPosition: 'top',
      });
      reactFlowEdges.push({
        id: `e-${mainNodeId}-${subNodeId}`,
        source: mainNodeId,
        target: subNodeId,
        type: 'smoothstep', // <--- ודא שזה מוגדר
        animated: false,
        markerEnd: { type: 'arrowclosed' },
      });

      // 3. Topics Nodes and Edges from Sub-Committees
      let topicYOffset = yOffset + 120; // Start topics below sub-committee
      topics.forEach((topic, topicIndex) => {
        const topicNodeId = `topic-${subNodeId}-${topicIndex}`;
        reactFlowNodes.push({
          id: topicNodeId,
          type: 'customNode', // Using our custom node type
          position: { x: subNodeX, y: topicYOffset }, // Align topics vertically under their sub-committee
          data: { label: topic, type: 'topic' },
          targetPosition: 'top',
        });
        reactFlowEdges.push({
          id: `e-${subNodeId}-${topicNodeId}`,
          source: subNodeId,
          target: topicNodeId,
          type: 'smoothstep', // <--- ודא שזה מוגדר
          animated: false,
          markerEnd: { type: 'arrowclosed' },
        });
        topicYOffset += 80; // Space for the next topic
      });
    });

    return { nodes: reactFlowNodes, edges: reactFlowEdges };
  }, [data, isSmallScreen]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <Box
      sx={{
        width: '100%',
        height: isSmallScreen ? '600px' : '700px', // גובה שונה למסכים קטנים/גדולים
        border: '1px solid #ddd',
        borderRadius: 2,
        mt: 4,
        mb: 2,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // onConnect={onConnect} // אין צורך בזה אם המשתמש לא אמור לחבר קווים
        nodeTypes={nodeTypes}
        fitView // Ensures all elements are visible initially
        
        // --- שינויים לביטול אינטראקציות ---
        panOnDrag={false} // גרירת כל התצוגה - בוטל
        nodesDraggable={false} // גרירת צמתים - בוטל
        zoomOnScroll={false} // זום עם גלילה - בוטל
        zoomOnPinch={false} // זום עם צביטה - בוטל
        zoomOnDoubleClick={false} // זום בלחיצה כפולה - בוטל
        proOptions={{ hideAttribution: true }} // מסתיר את כיתוב "React Flow" הקטן בתחתית (אם ברישיון מאפשר)
        // --- סוף שינויים לביטול אינטראקציות ---

        elementsSelectable={false} // אופציונלי: הופך אלמנטים ללא ניתנים לבחירה
      >
        {/*
        <MiniMap /> // אופציונלי: הסר אם אינך רוצה מפה קטנה
        <Controls /> // אופציונלי: הסר אם אינך רוצה כפתורי זום ומיקום
        */}
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </Box>
  );
};

export default CommitteeStructureDiagramWithReactFlow;
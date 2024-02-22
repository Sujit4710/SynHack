import React, { useState } from 'react';
import TopBar from '../component/TopBar.js';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Import images
import sustainability from '../Images/sustainability.png';
import level1 from '../Images/level1.png';
import level2 from '../Images/level2.png';
import level3 from '../Images/level3.png';

// Styled components for better organization
const CenteredContainer = styled('div')({
  display: 'flex',
//   flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  marginTop: '1%'
});


const boxFortext = styled('div')({
display: 'flex',

});

const FlowchartCard = styled(Card)({
  maxWidth: 'calc(70% - 20px)', // Adjust the width to be 10px away from both ends
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '10%',
  backgroundColor: '#fafafa',
  borderRadius: 16,
  overflow: 'hidden', // Hide potential horizontal scrollbar
  
});

const FlowchartCard1 = styled(Card)({
    maxWidth: 'calc(90% - 20px)', // Adjust the width to be 10px away from both ends
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
    backgroundColor: '#fafafa',
    borderRadius: 16,
    overflow: 'hidden', // Hide potential horizontal scrollbar
    
  });

const LevelContainer = styled('div')({
  display: 'flex',
  overflowX: 'auto',
  gap: 16,
  padding: '16px 0',
  justifyContent: 'space-between'
});

const LevelCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
//   justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
  padding: 8,
  border: '1px solid #ccc',
  borderRadius: 8,
  margin: '0 2%'
});

const StyledButton = styled(Button)({
  backgroundColor: 'darkgreen',
  color: 'white',
  marginTop: '16px',
});

// Data for game levels
const levelsData = [
  {
    title: 'Level 1',
    description: 'Cultivate Knowledge, Plant Seeds of Sustainability, and Watch Your Eco-IQ Blossom!',
    image: level1,
  },
  {
    title: 'Level 2',
    description: 'Planting & Monitoring – where you nurture your green expertise, sow seeds of environmental wisdom, and watch your sustainable know-how sprout to life!',
    image: level2,
  },
  {
    title: 'Level 3',
    description: 'Crop Protection & Harvesting – guard your green gains, reap a bounty of eco-knowledge, and celebrate the sustainable harvest of your environmental expertise!.',
    image: level3,
  },
];

const RecipeReviewCard = () => {
  const [showFlowchart, setShowFlowchart] = useState(false);

  return (
    <>
      <TopBar />
      <CenteredContainer>
        <FlowchartCard style={showFlowchart ? {top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 } : {}}>
          <CardHeader action={<div></div>} title="Why Sustainability?" style={{ textAlign: 'center' }} />
          <boxFortext>
            <CardMedia component="img" height="300" image={sustainability} alt="Sustainability" />
            <CardContent>
              <Typography variant="body2" color="text.secondary" align="center">
              Sustainability is like taking good care of our home, Earth. It's important because it keeps everything in balance, just like a well-orchestrated song. When we use resources wisely and treat nature kindly, we're making sure that the world stays healthy for us and for the people who will come after us. It's like being a good friend to our planet, making sure it stays happy and beautiful.
              </Typography>
            </CardContent>
          </boxFortext>
          {showFlowchart ? (
            <FlowchartCard1>
              <Typography variant="h5" align="center" gutterBottom>
                Game Levels
              </Typography>
              <LevelContainer>
                {levelsData.map((level, index) => (
                  <LevelCard key={index}>
                    <CardHeader title={level.title} style={{padding: '5'}}/>
                    <CardMedia
                      component="img"
                      height="100"
                      image={level.image}
                      alt={level.title}
                      style={{ marginBottom: '8px' }}
                    />
                    <Typography paragraph>{level.description}</Typography>
                  </LevelCard>
                ))}
              </LevelContainer>
            </FlowchartCard1>
          ) : (
            <StyledButton onClick={() => setShowFlowchart(true)} variant="outlined">
              Let's Play GreenHarvest Quiz!
            </StyledButton>
          )}
        </FlowchartCard>
      </CenteredContainer>
    </>
  );

};

export default RecipeReviewCard;
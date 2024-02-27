import React from 'react';
class RewardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 1000, // Example points the user has
      rewards: [
        { id: 1, name: '10% Discount Coupon', cost: 500 },
        { id: 2, name: 'Free Product Sample', cost: 800 },
        { id: 3, name: 'Free Shipping for a Month', cost: 1000 },
      ],
    };
  }
  redeemReward = (cost) => {
    if (this.state.points >= cost) {
      this.setState({ points: this.state.points - cost });
      alert('Reward redeemed successfully!');
      window.location.href = 'https://www.syngenta-us.com/';
    } else {
      alert('Not enough points to redeem this reward.');
    }
  };
  render() {
    const { points, rewards } = this.state;
    return (
      <div style={styles.container}><h1 style={styles.header}>Rewards Center</h1><div style={styles.pointsBox}><p>You have <strong>{points}</strong> points.</p></div><div style={styles.rewardsList}>
          {rewards.map((reward) => (
            <div key={reward.id} style={styles.rewardItem}><span style={styles.rewardName}>{reward.name}</span><button
                style={styles.redeemButton}
                onClick={() => this.redeemReward(reward.cost)}
                disabled={points < reward.cost}
              >
                Redeem for {reward.cost} points
              </button></div>
          ))}
        </div></div>
    );
  }
}
const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    color: '#333',
    marginBottom: '30px',
  },
  pointsBox: {
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
  },
  rewardsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rewardItem: {
    margin: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%',
  },
  rewardName: {
    marginRight: '15px',
  },
  redeemButton: {
    padding: '5px 10px',
    backgroundColor: '#5cb85c',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    outline: 'none',
  },
};
export default RewardsPage;
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },

  /* ─── Filter Bar ─── */
  filterBar: {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 28,
    flexWrap: 'wrap',
  },
  filterButton: {
    background: 'rgba(255,255,255,0.6)',
    border: '1px solid rgba(200, 180, 210, 0.3)',
    borderRadius: 12,
    padding: '9px 22px',
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "'Inter', sans-serif",
    color: '#7a6d8a',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    outline: 'none',
    '&:hover': {
      backgroundColor: 'rgba(200, 180, 210, 0.12)',
      borderColor: 'rgba(180, 150, 200, 0.4)',
    },
  },
  filterButtonActive: {
    background: 'linear-gradient(135deg, #c9a7c7 0%, #a7b5d7 100%)',
    color: '#fff',
    fontWeight: 600,
    border: '1px solid transparent',
    boxShadow: '0 3px 12px rgba(180, 160, 200, 0.3)',
    '&:hover': {
      background: 'linear-gradient(135deg, #b896b6 0%, #96a4c6 100%)',
    },
  },

  /* ─── Empty State ─── */
  noPostsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(8),
    color: '#a093ad',
  },
  noPostsText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
    marginTop: 12,
    color: '#a093ad',
  },
}));
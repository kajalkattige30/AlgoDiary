import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 20,
    margin: '30px 0',
    padding: '20px 24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #e8d5e0 0%, #c9b8db 50%, #b8c6db 100%)',
    boxShadow: '0 4px 24px rgba(180, 160, 200, 0.25)',
    border: '1px solid rgba(255,255,255,0.5)',
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    color: '#4a3f5c',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    fontSize: '2.4rem',
  },
  fab: {
    position: 'fixed',
    bottom: 32,
    right: 32,
    background: 'linear-gradient(135deg, #c9a7c7 0%, #a7b5d7 100%)',
    color: '#fff',
    boxShadow: '0 4px 16px rgba(180, 160, 200, 0.35)',
    width: 60,
    height: 60,
    '&:hover': {
      background: 'linear-gradient(135deg, #b896b6 0%, #96a4c6 100%)',
      boxShadow: '0 6px 24px rgba(180, 160, 200, 0.45)',
      transform: 'scale(1.05)',
    },
    transition: 'all 0.3s ease',
  },
}));
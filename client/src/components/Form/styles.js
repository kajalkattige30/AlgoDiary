import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogPaper: {
    borderRadius: 24,
    background: 'linear-gradient(160deg, #fffbf7 0%, #f8f0f8 60%, #f0eef8 100%)',
    border: '1px solid rgba(200, 180, 210, 0.3)',
    color: '#3d3d5c',
    boxShadow: '0 20px 60px rgba(160, 140, 180, 0.2)',
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 28px 8px',
  },
  titleText: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
    color: '#4a3f5c',
    fontSize: '1.4rem',
  },
  closeButton: {
    color: 'rgba(74, 63, 92, 0.4)',
    '&:hover': {
      color: '#4a3f5c',
      backgroundColor: 'rgba(200, 180, 210, 0.1)',
    },
  },
  dialogContent: {
    padding: '12px 28px',
  },
  field: {
    marginBottom: 16,
    '& .MuiOutlinedInput-root': {
      borderRadius: 14,
      backgroundColor: 'rgba(255,255,255,0.7)',
      color: '#3d3d5c',
      transition: 'all 0.2s ease',
      '& fieldset': {
        borderColor: 'rgba(200, 180, 210, 0.4)',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(180, 150, 200, 0.6)',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#b896b6',
      },
      '&.Mui-focused': {
        backgroundColor: '#ffffff',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(74, 63, 92, 0.5)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#9b7a9b',
    },
  },
  dialogActions: {
    padding: '12px 28px 28px',
    gap: 12,
  },
  clearBtn: {
    color: 'rgba(74, 63, 92, 0.5)',
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: 12,
    padding: '10px 22px',
    '&:hover': {
      backgroundColor: 'rgba(200, 180, 210, 0.1)',
    },
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #c9a7c7 0%, #a7b5d7 100%)',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 14,
    padding: '10px 30px',
    boxShadow: '0 4px 14px rgba(180, 160, 200, 0.3)',
    '&:hover': {
      background: 'linear-gradient(135deg, #b896b6 0%, #96a4c6 100%)',
      boxShadow: '0 6px 20px rgba(180, 160, 200, 0.4)',
    },
  },
}));
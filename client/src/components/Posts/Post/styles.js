import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    borderRadius: 22,
    background: 'linear-gradient(160deg, #fffcf9 0%, #faf5fa 60%, #f4f2fb 100%)',
    border: '1px solid rgba(210, 190, 220, 0.3)',
    color: '#3d3d5c',
    transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxShadow: '0 2px 16px rgba(180, 160, 200, 0.1)',
    '&:hover': {
      transform: 'translateY(-6px)',
      boxShadow: '0 12px 40px rgba(180, 160, 200, 0.2)',
      border: '1px solid rgba(200, 170, 210, 0.4)',
    },
  },

  /* ─── Header ─── */
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '22px 22px 12px',
  },
  dateRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  dateIcon: {
    color: '#b896b6',
    fontSize: 18,
  },
  date: {
    fontSize: 13,
    fontWeight: 600,
    color: '#6b5c7a',
    letterSpacing: '0.3px',
  },
  time: {
    fontSize: 11,
    color: '#a093ad',
    fontWeight: 400,
  },
  editBtn: {
    color: 'rgba(74, 63, 92, 0.3)',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#9b7a9b',
      backgroundColor: 'rgba(200, 180, 210, 0.12)',
    },
  },

  /* ─── Title ─── */
  titleSection: {
    padding: '0 22px 16px',
  },
  algoName: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    fontSize: '1.35rem',
    color: '#3d3050',
    letterSpacing: '-0.3px',
    lineHeight: 1.3,
    marginTop: 8,
  },

  /* ─── Type Badges ─── */
  typeBadgeAlgo: {
    backgroundColor: 'rgba(167, 181, 215, 0.15)',
    color: '#6b7a9b',
    fontWeight: 600,
    fontSize: 11,
    borderRadius: 8,
    border: '1px solid rgba(167, 181, 215, 0.25)',
    height: 24,
  },
  typeBadgePattern: {
    backgroundColor: 'rgba(200, 167, 199, 0.15)',
    color: '#8b6a8b',
    fontWeight: 600,
    fontSize: 11,
    borderRadius: 8,
    border: '1px solid rgba(200, 167, 199, 0.25)',
    height: 24,
  },

  /* ─── Dividers ─── */
  divider: {
    backgroundColor: 'rgba(200, 180, 210, 0.2)',
    margin: '0 22px',
  },

  /* ─── Complexity Chips ─── */
  complexitySection: {
    display: 'flex',
    gap: 8,
    padding: '16px 22px',
    flexWrap: 'wrap',
  },
  chipTime: {
    backgroundColor: 'rgba(200, 167, 199, 0.15)',
    color: '#8b6a8b',
    fontWeight: 500,
    fontSize: 12,
    borderRadius: 10,
    border: '1px solid rgba(200, 167, 199, 0.25)',
  },
  chipSpace: {
    backgroundColor: 'rgba(167, 181, 215, 0.15)',
    color: '#6b7a9b',
    fontWeight: 500,
    fontSize: 12,
    borderRadius: 10,
    border: '1px solid rgba(167, 181, 215, 0.25)',
  },
  chipIcon: {
    fontSize: '15px !important',
    marginLeft: '6px !important',
  },

  /* ─── Input Structure Chip (Pattern) ─── */
  inputChip: {
    backgroundColor: 'rgba(186, 200, 160, 0.15)',
    color: '#6a7a5c',
    fontWeight: 500,
    fontSize: 12,
    borderRadius: 10,
    border: '1px solid rgba(186, 200, 160, 0.3)',
  },

  /* ─── Description ─── */
  descriptionSection: {
    padding: '14px 22px 8px !important',
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: '#b0a3bb',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    color: '#5a5070',
    lineHeight: 1.7,
  },

  /* ─── Use Case ─── */
  useCaseSection: {
    display: 'flex',
    gap: 10,
    padding: '8px 22px 16px',
    alignItems: 'flex-start',
  },
  useCaseIcon: {
    color: '#dba86d',
    fontSize: 20,
    marginTop: 2,
  },
  useCaseText: {
    fontSize: 13,
    color: '#6b5c7a',
    lineHeight: 1.6,
  },

  /* ─── Pattern Sections ─── */
  patternSection: {
    display: 'flex',
    gap: 10,
    padding: '8px 22px 12px',
    alignItems: 'flex-start',
  },
  exampleSection: {
    padding: '8px 22px 16px',
  },
  exampleList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  exampleItem: {
    fontSize: 13,
    color: '#6b5c7a',
    lineHeight: 1.5,
    paddingLeft: 4,
  },

  /* ─── Insights Section ─── */
  insightsSection: {
    padding: '16px 22px',
    backgroundColor: 'rgba(219, 168, 109, 0.06)',
    borderRadius: 0,
  },
  insightsHeading: {
    fontSize: 11,
    fontWeight: 700,
    color: '#c9956a',
    textTransform: 'uppercase',
    letterSpacing: '1.2px',
    marginBottom: 12,
  },
  insightRow: {
    display: 'flex',
    gap: 10,
    marginBottom: 10,
    alignItems: 'flex-start',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  insightMarker: {
    fontSize: 14,
    marginTop: 1,
    flexShrink: 0,
  },
  insightLabel: {
    fontSize: 10,
    fontWeight: 700,
    color: '#b0a3bb',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: 2,
  },
  insightText: {
    fontSize: 13,
    color: '#5a5070',
    lineHeight: 1.6,
  },

  /* ─── Footer ─── */
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 22px 18px',
  },
  relativeTime: {
    fontSize: 11,
    color: '#c0b5c8',
    fontStyle: 'italic',
  },
  deleteBtn: {
    color: '#d4a0a0',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 500,
    borderRadius: 10,
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#c07070',
      backgroundColor: 'rgba(212, 160, 160, 0.08)',
    },
  },
}));

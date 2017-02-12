import React from 'react';
import Grid from 'tc-reactui/components/Grid/Grid.jsx';

const ManagersPresenter = ({
  singleSpecialistHandler,
  rowClickListener,
  paging,
  loading,
  gridData
}) => {
  const sectionStyle = {
    position: 'absolute',
    top: '0',
    bottom: '140px',
    overflowY: 'auto',
    width: '100%',
    padding: '20px 40px'
  }
  return (
    <div className="content-wrapper">
      <section className="content-header" style={sectionStyle}>
        <Grid
          metadata={gridData.metadata}
          data={gridData.data}
          rowClickListener={rowClickListener}
          showLoading={false}
        />
      </section>
      <div className="space-foot" />
    </div>
  );
};

export default ManagersPresenter;

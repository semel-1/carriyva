import React from 'react'

const InfoField = ({ label, value }) => (
    <div className="flex flex-col">
      <span className="font-semibold text-base text-50">{label}</span>
      <h3 className="font-semibold text-3xl text-100">{value}</h3>
    </div>
  );

export default InfoField
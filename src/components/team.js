import React from 'react';

const teamMembers = [
  { id: 1, name: 'Aisha Nalweyiso', role: 'Founder & CEO' },
  { id: 2, name: 'John Okello', role: 'Agricultural Expert' },
  { id: 3, name: 'Mary Atim', role: 'Community Outreach Coordinator' },
];

const OurTeam = () => {
  return (
    <div className="container mt-5">
      <h2 style={{ color: '#366000', fontWeight: 'bold' }}>Our Team</h2>
      <ul>
        {teamMembers.map(member => (
          <li key={member.id} style={{ marginBottom: '10px' }}>
            <strong>{member.name}</strong> — {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurTeam;

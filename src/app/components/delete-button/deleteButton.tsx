"use client";
import React from 'react';

interface DeleteLeadButtonProps {
  leadId: number;
  onDelete: () => void;
}

const DeleteLeadButton: React.FC<DeleteLeadButtonProps> = ({ leadId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/deletelead?id=${leadId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Falha ao deletar lead');
      }

      onDelete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete}>
      Delete Lead
    </button>
  );
};

export default DeleteLeadButton;
import React from 'react';
import { Check } from 'lucide-react';

export const BasicRecommendationsCard = () => {
  const recommendations = [
    {
      title: "Increase Watering",
      description: "Current soil moisture levels are below optimal.",
      priority: "high",
    },
    {
      title: "Monitor for Leaf Spot",
      description: "Early signs detected in recent uploads.",
      priority: "medium",
    },
    {
      title: "Apply Organic Fertilizer",
      description: "Scheduled maintenance due in 2 days.",
      priority: "low",
    },
  ];

  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '24px',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      maxWidth: '600px',
      margin: '20px auto'
    }}>
      <h2 style={{
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '16px'
      }}>Recommendations</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {recommendations.map((rec, index) => {
          let priorityColor;
          switch (rec.priority) {
            case 'high':
              priorityColor = '#FEE2E2';
              break;
            case 'medium':
              priorityColor = '#FEF3C7';
              break;
            case 'low':
              priorityColor = '#D1FAE5';
              break;
            default:
              priorityColor = '#F3F4F6';
          }

          return (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              padding: '16px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                flexShrink: 0,
                color: '#2D5A27'
              }}>
                <Check size={24} />
              </div>
              
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500'
                  }}>{rec.title}</h3>
                  <span style={{
                    fontSize: '12px',
                    padding: '4px 8px',
                    borderRadius: '9999px',
                    backgroundColor: priorityColor,
                    color: rec.priority === 'high' ? '#991B1B' : 
                           rec.priority === 'medium' ? '#92400E' : '#065F46'
                  }}>
                    {rec.priority}
                  </span>
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#4B5563',
                  marginTop: '4px'
                }}>{rec.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
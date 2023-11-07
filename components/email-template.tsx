import { FC } from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div style={{ background: '#000', width: '800px' }}>
    <h1 style={{ color: '#FFF', marginBottom: '40px' }}>
      Bienvenido, {firstName}!
    </h1>
    <div>
      <h2 style={{ color: '#FFF' }}>Este es tu código de verificación</h2>
      <h1 style={{ fontSize: '50px', fontWeight: '700', color: '#FFF' }}>
        546589
      </h1>
    </div>
  </div>
);

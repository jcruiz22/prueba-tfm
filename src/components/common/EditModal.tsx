import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    maxHeight: '90%',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  customer: any; // Define proper type according to your Customer interface
}

export const EditModal: React.FC<EditModalProps> = ({ open, onClose, customer }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Ficha de Candidato
        </Typography>
        <TextField fullWidth margin="normal" label="Nombre" defaultValue={customer?.name} />
        <TextField fullWidth margin="normal" label="Apellidos" defaultValue={customer?.apellidos} />
        <TextField fullWidth margin="normal" label="Género" defaultValue={customer?.genero} />
        <TextField fullWidth margin="normal" label="Fecha Nacimiento" defaultValue={customer?.fechaNacimiento} />
        <TextField fullWidth margin="normal" label="Lugar Nacimiento" defaultValue={customer?.lugarNacimiento} />
        <TextField fullWidth margin="normal" label="DNI/NIE" defaultValue={customer?.dni} />
        <TextField fullWidth margin="normal" label="Móvil" defaultValue={customer?.movil} />
        <TextField fullWidth margin="normal" label="Email" defaultValue={customer?.email} />
        <TextField fullWidth margin="normal" label="Dirección Postal" defaultValue={customer?.direccionPostal} />
        <TextField fullWidth margin="normal" label="Código Postal" defaultValue={customer?.codigoPostal} />
        <TextField fullWidth margin="normal" label="Población" defaultValue={customer?.poblacion} />
        <TextField fullWidth margin="normal" label="Estado Civil" defaultValue={customer?.estadoCivil} />
        <TextField fullWidth margin="normal" label="Nº Hijos" defaultValue={customer?.numHijos} />
        <TextField fullWidth margin="normal" label="% Discapacidad" defaultValue={customer?.discapacidad} />
        <FormControlLabel control={<Checkbox defaultChecked={customer?.certDiscapacidad} />} label="Certificado Discapacidad Completo (Si/No)" />
        <FormControlLabel control={<Checkbox defaultChecked={customer?.incapacidad} />} label="Incapacidad (Si/No)" />
        <FormControlLabel control={<Checkbox defaultChecked={customer?.inscripcionDiscapacidad} />} label="Inscripción Discapacidad en Tesorería (Si/No)" />
        <FormControlLabel control={<Checkbox defaultChecked={customer?.adaptacionPuesto} />} label="Adaptación al Puesto (Si/No)" />
        {customer?.adaptacionPuesto && <TextField fullWidth margin="normal" label="En Caso Que Si, Indique Cual" defaultValue={customer?.adaptacionDetalles} />}
        <TextField fullWidth margin="normal" label="Últimos Estudios Reglados Concluidos" defaultValue={customer?.estudios} />
        <TextField fullWidth margin="normal" label="Otras Formaciones Regladas" defaultValue={customer?.otrasFormaciones} />
        <TextField fullWidth margin="normal" label="Carnet de Conducir" defaultValue={customer?.carnetConducir} />
        <TextField fullWidth margin="normal" label="Idiomas Certificados" defaultValue={customer?.idiomasCertificados} />
        <TextField fullWidth margin="normal" label="Otros Idiomas" defaultValue={customer?.otrosIdiomas} />
        <TextField fullWidth margin="normal" label="IBAN" defaultValue={customer?.iban} />
        <TextField fullWidth margin="normal" label="CV Actualizado" defaultValue={customer?.cvActualizado} />
        {/* Add fields for Entrevistas if needed */}
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={onClose}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

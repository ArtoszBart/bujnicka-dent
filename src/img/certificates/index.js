import certificatesPlaceholders from './placeholders/index';
import certificatesFull from './full/index';

export const certificates = certificatesFull.map((val, key) => ({
	full: val,
	placeholder: certificatesPlaceholders[key]
}));

export default certificates;
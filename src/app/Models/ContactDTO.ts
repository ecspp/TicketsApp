import { ContactTypeDTO } from './ContactTypeDTO';

export interface ContactDTO {
  id: number | null;
  name: string;
  email: string;
  contactTypes: ContactTypeDTO[];
  createdAt: string;
  updatedAt: string;
}

import { IAdmin, IAdminDocument } from '../../models/admin';

const adminShortSerializer = (admin: IAdminDocument) => {
  const result: Partial<IAdmin> = {
    id: admin.id,
    full_name: admin.full_name,
    email: admin.email,
  };

  return result;
};

export default adminShortSerializer;

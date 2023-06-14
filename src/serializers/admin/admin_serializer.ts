import { IAdmin, IAdminDocument } from '../../models/admin';

const adminSerializer = (admin: IAdminDocument) => {
  const result: Partial<IAdmin> = {
    id: admin.id,
    username: admin.username,
    email: admin.email,
    full_name: admin.full_name,
  };

  return result;
};

export default adminSerializer;

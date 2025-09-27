import { getTenantDB } from '../config/tenentdb';
import { customerSchema } from '../model/customer';
export const getCustomerModel = async (tenantId) => {
    const tenantDb = await getTenantDB(tenantId);
    return tenantDb.model("customers", customerSchema)
}

import { getTenantDB } from '../config/tenentdb';
import { usershema } from '../model/user.model';

export const getUserModel = async (tenantId) => {
    const tenantDb = await getTenantDB(tenantId);
    console.log("tenantDb",tenantDb)
    return tenantDb.model("User", usershema)
}

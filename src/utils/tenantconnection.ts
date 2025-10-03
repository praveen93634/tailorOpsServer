import { getTenantDB } from '../config/tenentdb';
import { employeeshema } from '../model/employee.model';

 const getEmployee = async (tenantId) => {
    const tenantDb = await getTenantDB(tenantId);
     if (tenantDb.models.Employee) {
        return tenantDb.models.Employee;
    }
    return tenantDb.model("Employee", employeeshema)
}
module.exports = { getEmployee };
// export const getModel = async (tenantId, modelName, schema) => {
//     const tenantDb = await getTenantDB(tenantId);

//     if (tenantDb.models[modelName]) {
//         return tenantDb.models[modelName];
//     }

//     return tenantDb.model(modelName, schema);
// };
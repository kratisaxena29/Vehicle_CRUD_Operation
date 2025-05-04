import { db } from "../config/db";
import { Vehicle } from "../models/vehicle.model";
import { handleWithSQLError } from "../utils/handleWithSQLError";
import { handleSQLError } from "../utils/sqlErrorHandler";

export const createVehicle = (vehicle: Vehicle) =>
  handleWithSQLError(async () => {
    const [result] = await db.execute(
      "INSERT INTO vehicles (model, registration_no, brand_id, owner_id) VALUES (?, ?, ?, ?)",
      [
        vehicle.model,
        vehicle.registration_no,
        vehicle.brand_id,
        vehicle.owner_id,
      ]
    );

    return { id: (result as any).insertId, ...vehicle };
  });

  export const updateVehicle = (id: number, vehicle: Vehicle) =>
    handleWithSQLError(async () => {
      const [result]: any = await db.execute(
        "UPDATE vehicles SET model = ?, registration_no = ?, brand_id = ?, owner_id = ? WHERE id = ?",
        [
          vehicle.model,
          vehicle.registration_no,
          vehicle.brand_id,
          vehicle.owner_id,
          id,
        ]
      );
  
      if (result.affectedRows === 0) {
        const error = new Error(`Vehicle with ID ${id} does not exist.`);
        (error as any).statusCode = 404;
        (error as any).code = 'ER_BAD_NOT_FOUND';
        throw error;
      }
  
      return { id, ...vehicle };
    });
  

  export const deleteVehicle = (id: number) =>
    handleWithSQLError(async () => {
      const [result]: any = await db.execute("DELETE FROM vehicles WHERE id = ?", [id]);
  
      if (result.affectedRows === 0) {
        const error = new Error(`Vehicle with ID ${id} does not exist.`);
        (error as any).statusCode = 404; // Optional: attach HTTP status code
        (error as any).code = 'ER_BAD_NOT_FOUND'
        throw error;
      }
  
      return { message: `Vehicle with ID ${id} deleted successfully.` };
    });
  
export const getAllVehicles = () =>
  handleWithSQLError(async () => {
    const [rows] = await db.execute(
      `SELECT v.id, v.model, v.registration_no, b.name as brand, o.name as owner, o.email as owner_email
       FROM vehicles v
       JOIN brands b ON v.brand_id = b.id
       JOIN owners o ON v.owner_id = o.id`
    );
    return rows;
  });

  export const getVehicleById = (id: number) =>
    handleWithSQLError(async () => {
      const [rows]: any = await db.execute(
        `SELECT v.id, v.model, v.registration_no, b.name as brand, o.name as owner, o.email as owner_email
         FROM vehicles v
         JOIN brands b ON v.brand_id = b.id
         JOIN owners o ON v.owner_id = o.id
         WHERE v.id = ?`,
        [id]
      );
  
      if (!Array.isArray(rows) || rows.length === 0) {
        const error = new Error(`Vehicle with ID ${id} does not exist.`);
        (error as any).statusCode = 404;
        (error as any).code = 'ER_BAD_NOT_FOUND';
        throw error;
      }
  
      return rows[0];
    });
  
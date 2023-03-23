import Presente from "../models/presente-model";
import database from "./database";

const repository = {
    create: (presente: Presente, callback: (id?: Number) => void) => {
        const sql = "INSERT INTO Presente (nome, descricao, valor) VALUES (?, ?, ?)";

        const params = [presente.nome, presente.descricao, presente.valor];

        database.run(sql, params, function(_err) {
            callback(this?.lastID);
        });
    },

    getAll: (callback: (presentes: unknown[]) => void) => {
        const sql = "SELECT * FROM Presente";
        const params: any[] = [];

        database.all(sql, params, (_err, rows) => callback(rows));
    }
};

export default repository;
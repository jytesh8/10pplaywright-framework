export default class DatabaseConstants {
    static readonly QUERY_EXECUTION = "Query Execution";
    static readonly USER = "";
    static readonly PASSWORD = "";
    static readonly PROTOCOL = "";
    static readonly CONNECTION_STRING = "";
    static readonly dbConfig = {
        user: 'sa',        // Replace with your SQL Server username
        password: '',    // Replace with your SQL Server password
        server: 'LQA-JYTESHPUNJW', // Server and instance name (escaped backslash)
        database: 'shadanienterprises',    // Replace with your database name
        options: {
            encrypt: true,            // Use encryption if required
            trustServerCertificate: true, // For self-signed certificates
            requestTimeout: 30000     // Query timeout (30 seconds)
        },
        connectionTimeout: 25000      // Connection timeout (15 seconds)
    };
}

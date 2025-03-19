<?php
require '../vendor/autoload.php';
use Dotenv\Dotenv;

class Database {
    private $pdo;

    public function __construct() {
        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->load();
        
        try {
            $this->pdo = new PDO(
                "mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'] . ";charset=utf8mb4",
                $_ENV['DB_USER'],
                $_ENV['DB_PASS'],
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
            );
            error_log("Database connection established successfully.");
        } catch (PDOException $e) {
            error_log("Database connection failed: " . $e->getMessage());
            die(json_encode(["status" => 500, "message" => "Database connection failed"]));
        }
    }

    public function query($sql, $params = []) {
        try {
            error_log("Executing query: $sql");
            error_log("With parameters: " . json_encode($params));
            
            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($params);
            
            if (stripos(trim($sql), 'SELECT') === 0) {
                $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
                error_log("Query result: " . json_encode($result));
                return json_encode(["status" => 200, "message" => "Success", "data" => $result]);
            }
            
            return json_encode(["status" => 200, "message" => "Query executed successfully"]);
        } catch (PDOException $e) {
            error_log("Query error: " . $e->getMessage());
            return json_encode(["status" => 500, "message" => $e->getMessage()]);
        }
    }
}

// Exemplo de uso
//$crud = new Crud();
//echo $crud->create('users', ['name' => 'John Doe', 'email' => 'john@example.com']);
//echo $crud->read('users', ['id' => 1]);
//echo $crud->update('users', ['name' => 'Jane Doe'], ['id' => 1]);
//echo $crud->delete('users', ['id' => 1]);
?>

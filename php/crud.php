<?php

require './core.php';

class Crud {
    private $db;

    public function __construct() {
        $this->db = new Database();
    }

    public function create($table, $data) {
        $columns = implode(',', array_keys($data));
        $values = ':' . implode(', :', array_keys($data));
        $sql = "INSERT INTO $table ($columns) VALUES ($values)";
        return $this->db->query($sql, $data);
    }

    public function read($table, $conditions = []) {
        $where = empty($conditions) ? '' : ' WHERE ' . implode(' AND ', array_map(fn($key) => "$key = :$key", array_keys($conditions)));
        $sql = "SELECT * FROM $table $where";
        return $this->db->query($sql, $conditions);
    }

    public function update($table, $data, $conditions) {
        $set = implode(', ', array_map(fn($key) => "$key = :$key", array_keys($data)));
        $where = implode(' AND ', array_map(fn($key) => "$key = :cond_$key", array_keys($conditions)));
        
        $params = array_merge($data, array_combine(
            array_map(fn($key) => "cond_$key", array_keys($conditions)),
            array_values($conditions)
        ));
        
        $sql = "UPDATE $table SET $set WHERE $where";
        return $this->db->query($sql, $params);
    }

    public function delete($table, $conditions) {
        $where = implode(' AND ', array_map(fn($key) => "$key = :$key", array_keys($conditions)));
        $sql = "DELETE FROM $table WHERE $where";
        return $this->db->query($sql, $conditions);
    }
}

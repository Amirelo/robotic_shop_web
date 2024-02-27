<?php
class Database
{
    private $dbname = 'ROBOTIC_SHOP';
    private $port = '3002';
    private $username = 'root';
    private $password = '';
    private $connection;

    public function getConnect()
    {
        try {
            $this->connection = new PDO("mysql:host=" . $this->port . ";dbname=" . $this->dbname, $this->username, $this->password);
            return $this->connection;
        } catch (Exception $e) {
            echo $e->getMessage();
        }
    }
}

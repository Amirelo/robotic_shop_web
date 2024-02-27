<?php
class Product
{
    public $id;
    public $name;
    public $description;
    public $price;
    public $quantity;
    public $sold;
    public $totalRating;
    public $categoryID;

    public function __construct($id, $name, $description, $price, $quantity, $sold, $totalRating, $categoryID)
    {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->quantity = $quantity;
        $this->sold = $sold;
        $this->totalRating = $totalRating;
        $this->categoryID = $categoryID;
    }
}

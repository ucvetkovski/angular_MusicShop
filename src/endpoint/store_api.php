<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header('Content-Type: application/json');
include("connection.php");

$method = $_SERVER['REQUEST_METHOD'];
$action = isset($_REQUEST['action']) ? $_REQUEST['action'] : "";

function sendResponse($status, $response) {
    http_response_code($status);
    echo json_encode($response);
}

switch($method){
    case ('GET'):{
        switch($action){
            case ("albums"):{
                $result = $conn->query("SELECT * FROM albums a 
                INNER JOIN artists ar ON a.id_artist = ar.id_artist
                INNER JOIN formats f on a.id_format = f.id_format
                INNER JOIN prices p on a.id_price = p.id_price
                LEFT JOIN images i on i.id_album = a.id_album")->fetchAll();
                sendResponse(200, $result);
                break;
            }
            case ("users"):{
                $result = $conn->query("SELECT * FROM users INNER JOIN roles ON users.id_role = roles.id_role")->fetchAll();
                sendResponse(200, $result);
                break;
            }
            case ("genres"):{
                $result = $conn->query("SELECT * FROM genres")->fetchAll();
                sendResponse(200, $result);
                break;
            }
            case ("formats"):{
                $result = $conn->query("SELECT * FROM formats")->fetchAll();
                sendResponse(200, $result);
                break;
            }
            case ("albumDataById"):{
                $id = isset($_GET['id']) ? $_GET['id'] : "";
                if ($id) {
                $stmt = $conn->prepare("SELECT * FROM albums a 
                INNER JOIN artists ar ON a.id_artist = ar.id_artist
                INNER JOIN formats f on a.id_format = f.id_format
                INNER JOIN prices p on a.id_price = p.id_price
                INNER JOIN record_labels rl on a.id_record_label = rl.id_label
                LEFT JOIN images i on i.id_album = a.id_album
                WHERE a.id_album = ?");
                $stmt->execute([$id]);
                $result = $stmt->fetch();

                $tracklistStmt = $conn->prepare("SELECT * FROM tracks t WHERE t.id_album = ?");
                $tracklistStmt->execute([$id]);
                $tracks = $tracklistStmt->fetchAll();

                $genreStmt = $conn->prepare("SELECT g.genre_name FROM genres g inner join album_genres ag on ag.id_genre = g.id_genre INNER JOIN albums a on a.id_album = ag.id_album WHERE ag.id_album = ?");
                $genreStmt->execute([$id]);
                $genres = $genreStmt->fetchAll();

                sendResponse(200, ["album" => $result, "tracklist" => $tracks, "genres" => $genres]);
                }
                else {
                    sendResponse(400, ["message" => "albumId is required"]);
                }
                break;
            }
            case ("albumsGenres"):{
                $result = $conn->query("SELECT * FROM album_genres")->fetchAll();
                sendResponse(200, $result);
                break;
            }
            case ("ordersForUser"):{
                $id = isset($_POST['userId']) ? $_POST['userId'] : "";
                if ($id) {
                    $stmt = $conn->prepare("SELECT * FROM ordersUsers WHERE id_user = ?");
                    $stmt->execute([$id]);
                    $result = $stmt->fetchAll();
                    sendResponse(200, $result);
                } else {
                    sendResponse(400, ["message" => "userId is required"]);
                }
                break;
            }
            case ("all_orders"):{
                $result = $conn->query("SELECT * FROM
                 orders LEFT JOIN order_items oi ON oi.id_order = orders.id_order 
                 INNER JOIN albums a ON oi.id_album = a.id_album 
                 INNER JOIN prices p ON a.id_price = p.id_price 
                 INNER JOIN transactions WHERE orders.id_order = transactions.id_order")->fetchAll();
                sendResponse(200, $result);
                break;
            }
        }
        break;
    }
    case('POST'):{
        $input = json_decode(file_get_contents('php://input'), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception('Invalid JSON input');
        }
        switch($action){
            case ("postAlbum"):{
                //insertAlbum
                
            }
            case ("login"):{
                try {

                    $email = isset($input['email']) ? $input['email'] : "";
                    $password = isset($input['password']) ? $input['password'] : "";
                    if ($email && $password) {
                        $encPassword = md5($password);
                        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
                        $stmt->execute([$email, $encPassword]);
                        $result = $stmt->fetch();
                        if ($result) {
                            sendResponse(200, $result);
                        } else {
                            sendResponse(401, ["message" => "Invalid credentials."]);
                        }
                    } else {
                        sendResponse(400, ["message" => "Email and password are required."]);
                    }
                }
                catch (Exception $e) {
                    sendResponse(500, ["message" => "An error occurred. Try again later."]);
                }
                break;             
            }
            case ("registration"):{
                try {

                    $first_name = isset($input['first_name']) ? $input['first_name'] : "";
                    $last_name = isset($input['last_name']) ? $input['last_name'] : "";
                    $email = isset($input['email']) ? $input['email'] : "";
                    $address = isset($input['address']) ? $input['address'] : "";
                    $phone = isset($input['phone']) ? $input['phone'] : "";
                    $password = isset($input['password']) ? $input['password'] : "";
                    if ($email && $password && $email && $password) {
                        $encPassword = md5($password);
                        $stmt = $conn->prepare("INSERT INTO users (first_name,last_name,email,address,phone,password) VALUES (?,?,?,?,?,?)");
                        $result = $stmt->execute([$first_name, $last_name, $email, $address, $phone, $encPassword]);
                        if ($result) {
                            sendResponse(201, ["message" => "Account successfully created. You can now log in."]);
                        } else {
                            sendResponse(400, ["message" => "Please check your information for any errors."]);
                        }
                    }
                }
                catch (Exception $e) {
                    sendResponse(500, ["message" => "An error occurred. Try again later."]);
                }
                break;             
            }
            case ("createOrder"):{
                try{

                    $user = isset($input['user']) ? $input['user'] : null;
                    $shipping_address = isset($input['address']) ? $input['address'] : '';
                    $buyer = isset($input['email']) ? $input['email'] : '';
                    $items = isset($input['items']) ? $input['items'] : null;
                    $card = isset($input['card']) ? $input['card'] : '';


                    $conn->beginTransaction();

                    if($shipping_address && $buyer && is_array($items) && !empty($items)){

                        //insert into orders
                        $stmt = $conn->prepare("INSERT INTO orders (id_user,buyer,shipping_address) VALUES (?, ?, ?)");
                        $result = $stmt->execute([$user,$buyer,$shipping_address]);
                        $id_order = $conn->lastInsertId();

                        //insert into order_items
                        $stmt_oi = $conn->prepare("INSERT INTO order_items (id_order, id_album, quantity) VALUES (?, ?, ?)");
                        $stmt_ua = $conn->prepare("UPDATE albums SET in_stock = ? WHERE id_album = ?");

                        foreach ($items as $item) {
                            $id = $item['id'];
                            $currently_in_stock = $conn->query("SELECT in_stock FROM albums WHERE id_album = $id")->fetch();
                            $stmt_oi->execute([$id_order, $item['id'], $item['count']]);
                            if($currently_in_stock[0]-$item['count'] < 0){
                                $conn->rollBack();
                                sendResponse(500, ["message" => "You cannot buy more albums than there in stock."]);
                                exit;
                            }
                            $stmt_ua->execute([$currently_in_stock[0]-$item['count'], $item['id']]);
                        }

                        $stmt_ot = $conn->prepare("INSERT INTO transactions (id_order,card_number) VALUES (?,?)");
                        $stmt_ot->execute([$id_order, $card]);

                        $conn->commit();
                        sendResponse(201, ["message" => "Order placed!"]);
                    }
                    else{
                        $conn->rollBack();
                        sendResponse(500, ["message" => "Invalid data."]);
                    }
                }
                catch(Exception $e){
                    sendResponse(500, ["message" => "Order could not be placed.", "error" => $e->getMessage()]);
                }
                break;
            }
            case ("updateAlbum"):{
                //albumEdit
                
            }
            case ("updateUser"):{
                //updateUser
                
            }
            case ("deleteAlbum"):{
                try {
                    $id = isset($input['id']) ? $input['id'] : "";
                    if ($id) {
                        $stmt = $conn->prepare("DELETE FROM albums WHERE id_album = ?");
                        $result = $stmt->execute([$id]);
                        if ($result) {
                            sendResponse(200, ["message" => "Album deleted."]);
                        } else {
                            sendResponse(401, ["message" => "Action could not be performed."]);
                        }
                    } else {
                        sendResponse(400, ["message" => "Album id was not provided."]);
                    }
                }
                catch (Exception $e) {
                    sendResponse(500, ["message" => "An error occurred. Try again later."]);
                }
                break;    
            }
            case ("deleteUser"):{
                try {
                    $id = isset($_POST['userId']) ? $_POST["userId"] : "";
                    if ($id) {
                        $stmt = $conn->prepare("DELETE FROM users WHERE id_user = ?");
                        $stmt->execute([$id]);
                        sendResponse(200, ["message" => "User deleted"]);
                    } else {
                        sendResponse(400, ["message" => "userId is required"]);
                    }
                } catch (Exception $e) {
                    sendResponse(500, ["message" => "An error occurred"]);
                }
                break;    
            }
            case ("createTracklist"):{
                //addTracklistToAlbum
                
            }
            case ("editTracklist"):{
                //editTracklist
                
            }
            case ("deleteTracklist"):{
                //deleteTracklist (iz nekog razloga)
                
            }
        }
        break;
    }
}
?>
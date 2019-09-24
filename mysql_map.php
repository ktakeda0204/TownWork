<?php

// receive post data 
$prefecture = $_POST['request'];

// not empty
if (!empty($prefecture)) {

    // pdo instance
    $dsn = "mysql:dbname=TownWork;host=dbod-twdb.cern.ch;port=5509";
    $user = "admin";
    $password = "townwork";
    $pdo;
    
    try {
        $pdo = new PDO($dsn, $user, $password);
    } catch (PDOException $e) {
        echo "Failed: " . $e->getMessage() . "\n";
    }
    
    // SQL cuery
    //    $sql = "select city from local.test where prefecture = '".$prefecture."'";
    $results = $pdo->query("select database();");
    $test = $results->fetch(PDO::FETCH_NUM);
    // echo $test[0];

    $sql = "select * from twtb;";
    $results = $pdo->query($sql);

    // Output html 
    // echo '<table class="list_table">';
    // echo "<tr>";
    // echo "<th>市町村</th>";
    // echo "</tr>";
    // foreach ($results as $result) {
    //     echo "<tr>";
    //     echo "<td>".$result['id']."</td>";
    //     echo "<td>".$result['name']."</td>";
    //     echo "</tr>";
    // }
    // echo "</table>";
    $php_array = array();
    foreach ($results as $result) {
        //$php_array[] = '{ "name" : "' + $result['name'] +  '", "isFinished" : ' + $result['isFinished'] + '}';
        $php_array[] = array('name' => $result['name'], 'isFinished' => $result['isFinished'] );
    }
    $json = json_encode($php_array);
    echo $json;

    //空だったら
} else {
    echo '<p id="tekito">エラー：都道府県を選択して下さい。</p>';
}

?>

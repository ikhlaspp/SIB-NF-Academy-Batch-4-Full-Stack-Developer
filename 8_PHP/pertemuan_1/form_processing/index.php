<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Evaluasi Nilai Ujian</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .form-container { max-width: 400px; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background: #f9f9f9; }
        .form-group { margin-bottom: 15px; }
        .form-group label { display: block; margin-bottom: 5px; }
        .form-group input { width: 100%; padding: 8px; box-sizing: border-box; }
        button { padding: 10px 15px; background-color: #28a745; color: white; border: none; border-radius: 3px; cursor: pointer; }
        button:hover { background-color: #218838; }
        .result { margin-top: 20px; padding: 20px; border: 1px solid #ddd; max-width: 400px; border-radius: 5px; }
        .lulus { color: green; font-weight: bold; }
        .remedial { color: red; font-weight: bold; }
    </style>
</head>
<body>

    <div class="form-container">
        <h2>Form Nilai Ujian</h2>
        <form method="POST" action="">
            <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" id="nama" name="nama" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="nilai">Nilai Ujian:</label>
                <input type="number" id="nilai" name="nilai" required>
            </div>
            
            <button type="submit" name="submit">Proses Nilai</button>
        </form>
    </div>

    <?php
    if (isset($_POST['submit'])) {
        $nama = htmlspecialchars($_POST['nama']);
        $email = htmlspecialchars($_POST['email']);
        $nilai = (int)$_POST['nilai'];
        
        $status = "";
        $statusClass = "";
        
        // Control structure 
        if ($nilai >= 70) {
            $status = "Lulus";
            $statusClass = "lulus";
        } else {
            $status = "Remedial";
            $statusClass = "remedial";
        }

        // Display the output
        echo "<div class='result'>";
        echo "<h3>Hasil Evaluasi:</h3>";
        echo "<p><strong>Nama:</strong> $nama</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Nilai Ujian:</strong> $nilai</p>";
        echo "<p><strong>Status:</strong> <span class='$statusClass'>$status</span></p>";
        echo "</div>";
    }
    ?>

</body>
</html>

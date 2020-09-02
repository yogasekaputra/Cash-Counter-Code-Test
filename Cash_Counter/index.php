<!DOCTYPE html>
<html>
    <head>
        <title>Cash Counter</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script type='text/javascript' src='js/controller.js'></script>
        <link rel="stylesheet" href="css/cash_counter.css">
    </head>
    <body>
            <div class="container-fluid">
                <div class="container-title">
                    <div class="title2">
                        <h4>Kreatifitas Sinergisme Teknoindo</h4>
                    </div>
                    <div class="title1">
                        <h3 class="title">Cash Counter</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-4 form-inline">
                        <p>Money : <input id="Money" class="" type="text" placeholder="50000"></p>
                        <button class="btn-info" type="submit" onclick="validasi_Inputan()">Submit</button>
                    </div>
                    </br>
                    <!-- <label>Example : Rp.50000,- , 500000, Rp.500000</label> -->
                </div>
                <div class="row">
                    <p id="Hasil-1"></p>
                    </br>
                    <p id="Hasil-2"></p>
                </div>
            </div>
    </body>
</html>





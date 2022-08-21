 <?php
 include('../control/logincheck.php');
 ?>
 <!DOCTYPE html>  
 <html>  
      <head>  
        <title></title>  
      </head>  
      <body>  
        
                     <table>  
                          <tr>  
                               <th>UserName</th> 
                               <th>Password</th>
                                
                          </tr>  
                          <?php   
                          $data = file_get_contents("../model/json/admin_data.json");  
                          $data = json_decode($data, true);  
                          foreach($data as $row)  
                          {  
                               echo '<tr>
                               <td>'.$row["UserName"].'</td>
                               <td>'.$row["Password"].'</td>
                               
                               </tr>';  
                          }  
                          ?>  
                     </table>  
                 
      </body>  
 </html>  
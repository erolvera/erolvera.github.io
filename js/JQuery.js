//http://www.eslomas.com/2012/02/jquery-para-abrir-enlaces-en-nueva-ventana-sin-target-_blank/
<script type="text/javascript">
$(document).ready(function(){
   $("a.external").on('click', function() {
      url = $(this).attr("href");
      window.open(url, '_blank');
      return false;
   });
});
</script>

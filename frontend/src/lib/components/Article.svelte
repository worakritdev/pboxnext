<script>
  export let title, content;
</script>

<header>
  {title || "Your box Header"}
</header>
<section>
  {content ||
    "ตัวอย่างเนื้อหา คำค้นหา ต่างๆ ถ้าเห็นข้อความนี้แสดงว่ายังไม่มีเนื้อหาของสิ่งนี้"}
</section>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>

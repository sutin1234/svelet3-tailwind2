<script lang="ts">
  // core components
  import CardTable from "components/Cards/CardTable.svelte";
  export const location = '';
</script>

<div class="flex flex-wrap mt-4">
  <div class="w-full px-4 mb-12">
    <CardTable />
  </div>
  <div class="w-full px-4 mb-12">
    <CardTable color="dark" />
  </div>
</div>

<script lang="ts">
  // core components
  import MapExample from "components/Maps/MapExample.svelte";
  export const location = '';
</script>

<div class="flex flex-wrap">
  <div class="w-full px-4">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
    >
      <MapExample />
    </div>
  </div>
</div>

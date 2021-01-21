<script lang="ts">
  // core components
  import CardSettings from "components/Cards/CardSettings.svelte";
  import CardProfile from "components/Cards/CardProfile.svelte";
  export const location = '';
</script>

<div class="flex flex-wrap">
  <div class="w-full px-4 lg:w-8/12">
    <CardSettings />
  </div>
  <div class="w-full px-4 lg:w-4/12">
    <CardProfile />
  </div>
</div>

<script lang="ts">
  import { Router, Route } from "svelte-routing";

  // components for this layout
  import AdminNavbar from "components/Navbars/AdminNavbar.svelte";
  import Sidebar from "components/Sidebar/Sidebar.svelte";
  import HeaderStats from "components/Headers/HeaderStats.svelte";
  import FooterAdmin from "components/Footers/FooterAdmin.svelte";

  // pages for this layout
  import Dashboard from "views/admin/Dashboard.svelte";
  import Settings from "views/admin/Settings.svelte";
  import Tables from "views/admin/Tables.svelte";
  import Maps from "views/admin/Maps.svelte";

  export let location: any;
  export let admin: any;
</script>

<div>
  <Sidebar {location} />
  <div class="relative bg-gray-200 md:ml-64">
    <AdminNavbar />
    <HeaderStats />
    <div class="w-full px-4 mx-auto -m-24 md:px-10">
      <Router url={admin}>
        <Route path="dashboard" component={Dashboard} />
        <Route path="settings" component={Settings} />
        <Route path="tables" component={Tables} />
        <Route path="maps" component={Maps} />
      </Router>
      <FooterAdmin />
    </div>
  </div>
</div>

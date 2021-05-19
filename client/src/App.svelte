<script>
  import {serverApi} from './config';
  import axios from 'axios';

  let name = 'client';
  axios.get(serverApi).then(it => name = it.data);
</script>

<h1>Hello {name}</h1>

<style>
  h1 {
    font-weight: bold;
  }
</style>

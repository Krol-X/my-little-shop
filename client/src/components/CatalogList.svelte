<script>
  import {
    Card,
    CardHeader, CardTitle,
    CardBody, CardSubtitle, CardText
  } from 'sveltestrap';

  let goods = [
    {
      name: "Первый товар",
      description: "Описание",
      cost: 20,
      count: 4
    },
    {
      name: "Второй товар",
      description: "Описание...",
      cost: 10,
      count: 2
    }
  ]

</script>

{#each goods as good, i}
  <Card class="mx-auto">
    <CardHeader>
      <CardTitle>{good.name}</CardTitle>
    </CardHeader>
    <CardBody>{good.description}</CardBody>
  </Card>
{/each}

<style>
  :global(.card) {
    width: 50%;
  }
</style>
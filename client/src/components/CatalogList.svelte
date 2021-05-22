<script>
  import {
    Card,
    CardHeader, CardTitle,
    CardBody, CardSubtitle, CardText,
    FormGroup, Input,
    Button
  } from 'sveltestrap';

  let goods = [
    {
      _id: 0,
      name: "Первый товар",
      description: "Описание",
      cost: 20,
      count: 4
    },
    {
      _id: 1,
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
    <CardBody>
      <CardSubtitle d-flex style="padding-bottom: 15px; font-weight: bold;">
        <div class="me-auto">Стоимость: {good.cost}</div>
        <div>Имеется: {good.count}</div>
      </CardSubtitle>
      <CardText>
        {good.description}
      </CardText>
      <FormGroup id="good-{good._id}" d-flex>
        <Button color="primary" style="flex: 2;">Подробнее</Button>
        <div d-flex>
          <Input
            type="number"
            id="counter-{good._id}"
            min="0"
            max="{good.count}"
            value="0"
            placeholder="number placeholder"
            style="width: 100px;"
          />
          <Button color="secondary" style="flex: 2;">Добавить в корзину</Button>
        </div>
      </FormGroup>
    </CardBody>
  </Card>
{/each}

<style>
  :global(.card) {
    width: 50%;
    margin-bottom: 30px;
  }
</style>

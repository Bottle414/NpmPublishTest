// src/index.ts
import Button from './components/Button.vue'
import Card from './components/Card.vue'

export { Button, Card }

export default {
  install(app: any) {
    app.component(Button.name, Button)// 一定要起个名字
    app.component(Card.name, Card)
  }
}
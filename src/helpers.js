import { faker } from "@faker-js/faker";

export function getRandomName() {
  return [faker.name.firstName()];
}
export function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

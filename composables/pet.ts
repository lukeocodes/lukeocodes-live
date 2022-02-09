import { readonly, ref, Ref } from "vue";

enum PetCharacter {
  Greg = "greg",
  Dave = "dave",
  Blue = "blue",
  Mort = "mort",
}

enum PetStatus {
  Idle = "idle",
  Walking = "walking",
  Kick = "kick",
}

interface Pet {
  character: Ref<PetCharacter>;
  position: Ref<number>;
  status: Ref<PetStatus>;
  right: Ref<boolean>;
}

const character = ref(PetCharacter.Greg);
const position = ref(1);
const status = ref(PetStatus.Idle);
const right = ref(false);
const maxPosition = process.browser ? window.innerWidth : 1920;

const events = ref([{ actions: [{ name: "move" }, { name: "move" }] }]);

const possibleEvents = {
  move: { actions: [{ name: "move" }, { name: "move" }] },
};

const currentEvent = null;

const hasEvent = !!events.value.find((x) => x !== undefined);

const queueEvent = (eventName: string): void => {};

// const changeDirection = (): void => {
//   right.value = !right.value;
// };

// const startWalking = (): void => {
//   status.value = PetStatus.Walking;
// };

// const stopWalking = (): void => {
//   status.value = PetStatus.Idle;
// };

// const walkTo = (position: number): void => {
//   position = position;
// };

const randPosition = (): number => {
  console.log(maxPosition, Math.floor(Math.random() * maxPosition));
  return Math.random() * maxPosition;
};

// export default function usePet(): Pet {
export default function usePet() {
  return {
    character,
    position,
    status,
    right,
    randPosition,
  };
}

import { Ref } from "vue";

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

function randCharacter<T>(): T[keyof T] {
  const characters = Object.values(PetCharacter) as unknown as T[keyof T][];
  const character = Math.floor(Math.random() * characters.length);

  return characters[character];
}

const character = ref(PetCharacter.Greg);
const position = ref(1);
const status = ref(PetStatus.Idle);
const right = ref(false);
const timeToPosition = ref(0);
const maxPosition = (process.server ? 1920 : window.innerWidth) - 64;

let timeout;

const walkTo = (newPosition: number, speed: number = 100): void => {
  clearTimeout(timeout);
  const pxToMove = Math.abs(position.value - newPosition);

  if (newPosition > position.value) {
    right.value = true;
  } else {
    right.value = false;
  }

  character.value = randCharacter();
  timeToPosition.value = pxToMove / speed;
  position.value = newPosition;
  status.value = PetStatus.Walking;

  timeout = setTimeout(() => {
    status.value = PetStatus.Idle;
    clearTimeout(timeout);
  }, timeToPosition.value * 1000);
};

const randPosition = (): number => {
  return Math.floor(Math.random() * maxPosition);
};

// export default function usePet(): Pet {
export default function usePet() {
  return {
    character,
    position,
    status,
    right,
    timeToPosition,
    walkTo,
    randPosition,
  };
}

import { w as push, F as props_id, B as spread_attributes, E as bind_props, y as pop, J as copy_payload, K as assign_payload, I as spread_props } from "./index2.js";
import { c as cn } from "./chevron-right.js";
import { d as createId, b as box, m as mergeProps } from "./create-id.js";
import "style-to-object";
import "clsx";
import { a as AvatarImageState, b as AvatarFallbackState } from "./avatar.js";
function Avatar_image$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    src,
    child,
    id = createId(uid),
    ref = null,
    crossorigin = void 0,
    referrerpolicy = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const imageState = AvatarImageState.create({
    src: box.with(() => src),
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v),
    crossOrigin: box.with(() => crossorigin),
    referrerPolicy: box.with(() => referrerpolicy)
  });
  const mergedProps = mergeProps(restProps, imageState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<img${spread_attributes({ ...mergedProps, src })} onload="this.__e=event" onerror="this.__e=event"/>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Avatar_fallback$1($$payload, $$props) {
  push();
  const uid = props_id($$payload);
  let {
    children,
    child,
    id = createId(uid),
    ref = null,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const fallbackState = AvatarFallbackState.create({
    id: box.with(() => id),
    ref: box.with(() => ref, (v) => ref = v)
  });
  const mergedProps = mergeProps(restProps, fallbackState.props);
  if (child) {
    $$payload.out.push("<!--[-->");
    child($$payload, { props: mergedProps });
    $$payload.out.push(`<!---->`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<span${spread_attributes({ ...mergedProps })}>`);
    children?.($$payload);
    $$payload.out.push(`<!----></span>`);
  }
  $$payload.out.push(`<!--]-->`);
  bind_props($$props, { ref });
  pop();
}
function Avatar_image($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Avatar_image$1($$payload2, spread_props([
      {
        "data-slot": "avatar-image",
        class: cn("aspect-square size-full", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function Avatar_fallback($$payload, $$props) {
  push();
  let {
    ref = null,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out.push(`<!---->`);
    Avatar_fallback$1($$payload2, spread_props([
      {
        "data-slot": "avatar-fallback",
        class: cn("flex size-full items-center justify-center rounded-full bg-muted", className)
      },
      restProps,
      {
        get ref() {
          return ref;
        },
        set ref($$value) {
          ref = $$value;
          $$settled = false;
        }
      }
    ]));
    $$payload2.out.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { ref });
  pop();
}
function generateMockEmployees() {
  const firstNames = [
    "Amanda",
    "Sonia",
    "Ping",
    "Selina",
    "Ranjeet",
    "Xiaoyan",
    "Thuy",
    "Jeanne",
    "Michael",
    "Sarah",
    "David",
    "Jennifer",
    "Robert",
    "Lisa",
    "James",
    "Michelle",
    "John",
    "Jessica",
    "William",
    "Ashley",
    "Richard",
    "Amanda",
    "Joseph",
    "Stephanie",
    "Thomas",
    "Nicole",
    "Christopher",
    "Elizabeth",
    "Charles",
    "Helen",
    "Daniel",
    "Deborah",
    "Matthew",
    "Rachel",
    "Anthony",
    "Carolyn",
    "Mark",
    "Janet",
    "Donald",
    "Catherine",
    "Steven",
    "Maria",
    "Paul",
    "Heather",
    "Andrew",
    "Diane",
    "Joshua",
    "Ruth",
    "Kenneth",
    "Julie",
    "Kevin",
    "Joyce",
    "Brian",
    "Virginia",
    "George",
    "Victoria",
    "Timothy",
    "Kelly",
    "Ronald",
    "Christine",
    "Jason",
    "Joan",
    "Edward",
    "Evelyn",
    "Jeffrey",
    "Lauren",
    "Ryan",
    "Judith",
    "Jacob",
    "Megan",
    "Gary",
    "Cheryl",
    "Nicholas",
    "Andrea",
    "Eric",
    "Jacqueline",
    "Jonathan",
    "Martha",
    "Stephen",
    "Frances",
    "Larry",
    "Gloria",
    "Justin",
    "Ann",
    "Scott",
    "Teresa",
    "Brandon",
    "Kathryn",
    "Benjamin",
    "Sandra",
    "Gregory",
    "Donna",
    "Frank",
    "Dorothy",
    "Raymond",
    "Sharon",
    "Samuel",
    "Nancy",
    "Patrick",
    "Karen",
    "Alexander",
    "Betty",
    "Jack",
    "Helen",
    "Dennis",
    "Deborah",
    "Jerry",
    "Laura",
    "Tyler",
    "Lisa",
    "Aaron",
    "Michelle"
  ];
  const lastNames = [
    "Rex",
    "Sohail",
    "Le",
    "Kandiman",
    "Kaur",
    "Feng",
    "Vinh",
    "To Choon Kwee",
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
    "Gomez",
    "Phillips",
    "Evans",
    "Turner",
    "Diaz",
    "Parker",
    "Cruz",
    "Edwards",
    "Collins",
    "Reyes",
    "Stewart",
    "Morris",
    "Morales",
    "Murphy",
    "Cook",
    "Rogers",
    "Gutierrez",
    "Ortiz",
    "Morgan",
    "Cooper",
    "Peterson",
    "Bailey",
    "Reed",
    "Kelly",
    "Howard",
    "Ramos",
    "Kim",
    "Cox",
    "Ward",
    "Torres",
    "Peterson",
    "Gray",
    "Ramirez",
    "James",
    "Watson",
    "Brooks",
    "Kelly",
    "Sanders",
    "Price",
    "Bennett",
    "Wood",
    "Barnes",
    "Ross",
    "Henderson",
    "Coleman",
    "Jenkins"
  ];
  const employmentStatuses = ["Full Time", "Part Time", "Contract", "Temporary"];
  const genders = ["Female", "Male", "Non-binary"];
  const departments = ["Human Resources", "Engineering", "Marketing", "Sales", "Finance", "Operations", "Customer Support", "Product Management"];
  const positions = ["Manager", "Senior Developer", "Marketing Specialist", "Sales Representative", "Accountant", "Operations Coordinator", "Support Specialist", "Product Manager"];
  const employees = [];
  for (let i = 0; i < 100; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[i % lastNames.length];
    const employeeNumber = String(600 + i).padStart(6, "0");
    const birthYear = 1950 + Math.floor(Math.random() * 50);
    const birthMonth = Math.floor(Math.random() * 12) + 1;
    const birthDay = Math.floor(Math.random() * 28) + 1;
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const hireYear = 2010 + Math.floor(Math.random() * 14);
    const hireMonth = Math.floor(Math.random() * 12) + 1;
    const hireDay = Math.floor(Math.random() * 28) + 1;
    const hireDate = new Date(hireYear, hireMonth - 1, hireDay);
    const age = (/* @__PURE__ */ new Date()).getFullYear() - birthYear;
    const department = departments[Math.floor(Math.random() * departments.length)];
    const position = positions[Math.floor(Math.random() * positions.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`;
    const phone = `+1 (555) ${String(Math.floor(Math.random() * 900) + 100)}-${String(Math.floor(Math.random() * 9e3) + 1e3)}`;
    const salary = `$${String(Math.floor(Math.random() * 100) + 50)},${String(Math.floor(Math.random() * 900) + 100)}`;
    const address = `${Math.floor(Math.random() * 9999) + 1} ${["Main", "Oak", "Pine", "Elm", "Cedar", "Maple", "Birch", "Willow"][Math.floor(Math.random() * 8)]} Street, ${["City", "Town", "Village"][Math.floor(Math.random() * 3)]}, ${["State", "Province"][Math.floor(Math.random() * 2)]} ${String(Math.floor(Math.random() * 9e4) + 1e4)}`;
    employees.push({
      id: i + 1,
      employeeNumber,
      firstName,
      lastName,
      employmentStatus: employmentStatuses[Math.floor(Math.random() * employmentStatuses.length)],
      dateOfBirth: birthDate,
      age,
      gender: genders[Math.floor(Math.random() * genders.length)],
      hiredDate: hireDate,
      terminationDate: null,
      // Most employees are active
      avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
      // Generate unique avatars
      email,
      phone,
      department,
      position,
      salary,
      address
    });
  }
  return employees;
}
const mockEmployees = generateMockEmployees();
export {
  Avatar_image as A,
  Avatar_fallback as a,
  mockEmployees as m
};

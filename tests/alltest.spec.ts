import { test } from "../src/Base/BaseTest";
import sample from "./sample.spec";
import example from "./example.spec";

test.describe.configure({ mode: 'parallel' });
sample;
example;
import { z } from "zod";

export const tmResponseSchema = z.object({
  _embedded: z.object({
    events: z.array(z.object({ id: z.string(), name: z.string() })),
  }),
  page: z.object({
    size: z.number().positive(),
    totalPages: z.number(),
    totalElements: z.number(),
    number: z.number(),
  }),
});

export type TMResponseInferred = z.infer<typeof tmResponseSchema>;

const createEventSchema = z.object({
  name: z.string(),
  capacity: z.coerce.number<string>(),
  date: z.string().transform((data) => new Date(data)),
});

export type CreateEvent = z.input<typeof createEventSchema>;
export type CreateEventOutput = z.output<typeof createEventSchema>;

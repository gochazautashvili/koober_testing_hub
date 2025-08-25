import { mockTask } from '../../constants';

export const Description = () => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Description</h3>
      <div className="prose prose-sm max-w-none">
        <div
          className="text-muted-foreground text-sm whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: mockTask.description }}
        />
      </div>
    </div>
  );
};

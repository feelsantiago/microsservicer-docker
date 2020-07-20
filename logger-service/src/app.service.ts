import { Injectable } from '@nestjs/common';

export interface MetadataInfo {
    [key: string]: unknown;
}

@Injectable()
export class AppService {
    public flatMetadata(metadata: MetadataInfo): unknown {
        const entries = Object.values(metadata);
        return entries.reduce((acc, next) => ({ ...(acc as any), ...(next as any) }));
    }
}

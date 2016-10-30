import { MapService } from '../services/map.service';
import { GroupService } from '../services/group.service';
import { Ipath } from '../interfaces/path';
export declare class CircleElement {
    private mapService;
    private groupService;
    lat: number;
    lon: number;
    radius: number;
    Options: Ipath;
    constructor(mapService: MapService, groupService: GroupService);
    ngOnInit(): void;
}

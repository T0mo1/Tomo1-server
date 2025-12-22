import { Body, Controller, Post } from '@nestjs/common';
import { DenverEntryTestService } from './denver-entry-test.service.js';
import { StartTestDto, SubmitTestDto } from './dto/entry-test.dto.js';

@Controller('entry-test')
export class DenverEntryTestController {
    constructor(private readonly service: DenverEntryTestService) { }

    @Post('start')
    startTest(@Body() dto: StartTestDto) {
        return this.service.startTest(dto);
    }

    @Post('submit')
    submitTest(@Body() dto: SubmitTestDto) {
        return this.service.submitTest(dto);
    }
}
